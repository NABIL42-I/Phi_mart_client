
import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    authApiClient.get("/orders/").then((res) => setOrders(res.data));
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
      console.log(response);
      if (response.status === 200) {
        setOrders((prevOrder) =>
          prevOrder.map((order) =>
            order.id === orderId ? { ...order, status: "Canceled" } : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />
      ))}
    </div>
  );
};

export default Orders;


// [
//   {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "user": 0,
//     "status": "Not Paid",
//     "total_price": 0,
//     "created_at": "2026-06-19T07:01:17.396Z",
//     "items": [
//       {
//         "id": 0,
//         "product": {
//           "id": 0,
//           "name": "string",
//           "price": 0
//         },
//         "price": 0,
//         "quantity": 2147483647,
//         "total_price": 0
//       },
//       {
//         "id": 0,
//         "product": {
//           "id": 0,
//           "name": "string",
//           "price": 0
//         },
//         "price": 0,
//         "quantity": 2147483647,
//         "total_price": 0
//       },
//     ]
//   }]