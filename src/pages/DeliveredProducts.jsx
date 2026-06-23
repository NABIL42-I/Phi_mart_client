import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import authApiClient from "../services/auth-api-client";
import apiClient from "../services/api-client";
import ProductList from "../components/DeliveredProducts/ProductList";
import ViewProductDetails from "../components/DeliveredProducts/ViewProductDetails";

const DeliveredProducts = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [deliveredProduct, setDeliveredProduct] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  
  // Track which product the user wants to inspect
  const [selectedProduct, setSelectedProduct] = useState(null); 

  // Step 1: Fetch Orders on Component Mount
  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        setIsLoading(true); // Keep loading active
        const response = await authApiClient.get("/orders/");
        setOrders(response.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
        setIsLoading(false); // Drop loading state if orders crash
      }
    };
    fetchOrderList();
  }, []);

  // Step 2: Extract Unique Product IDs and Fetch Details
  useEffect(() => {
    if (orders.length === 0) {
      setIsLoading(false);
      return;
    }

    const fetchSingleProduct = async () => {
      // Create a Set to automatically guarantee unique IDs
      const uniqueProductIds = new Set();
      
      // Extracting the IDs exactly your way
      orders.forEach((order) => {
        if (order.status === "Not Paid") {
          order.items.forEach((item) => {
            uniqueProductIds.add(item.product.id); // .add() ignores duplicates automatically
          });
        }
      });

      // Convert the Set back into an array to keep your loop functioning perfectly
      const product_arr = Array.from(uniqueProductIds);

      // If no unique unpaid items are discovered, terminate loading early
      if (product_arr.length === 0) {
        setIsLoading(false);
        return;
      }

      // Fetch using the unique array directly!
      let deliveredProductList = [];
      try {
        for (const productId of product_arr) {
          const response = await apiClient.get(`/products/${productId}/`);
          deliveredProductList.push(response.data);
        }
        
        // Save to state
        setDeliveredProduct(deliveredProductList);
      } catch (error) {
        console.log("Error fetching Single Product:", error);
      } finally {
        setIsLoading(false); // Stop loading animation when sequence completes
      }
    };

    fetchSingleProduct();
  }, [orders]); 

  // Conditional Rendering Switch for Details View
  if (selectedProduct) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Back button to clear the state and return to list view */}
        <button 
          onClick={() => setSelectedProduct(null)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to All Products
        </button>
        {/* Render your detailed component view */}
        <ViewProductDetails product={selectedProduct} />
      </div>
    );
  }

  // Standard Main View Layout 
  return (
    <div className="min-h-screen bg-gray-50">
      {(isLoading || deliveredProduct.length===0) ? (
        <div className="flex flex-col justify-center items-center p-24 space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="text-gray-500 font-medium text-sm animate-pulse">Loading products...</p>
        </div>
      ) : (
        /* Pass down the state setter function as the handler */
        <ProductList 
          products={deliveredProduct} 
          onViewDetails={(product) => setSelectedProduct(product)} 
        />
      )}
    </div>
  );
};

export default DeliveredProducts;