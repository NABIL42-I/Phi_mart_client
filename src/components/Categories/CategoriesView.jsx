import { useState } from 'react';
import ProductViewModal from './ProductViewModal'; // Import the new modal file

const CategoriesView = ({ categories }) => {
    // Local state to keep track of which product details to map inside the open modal
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="container mx-auto p-6 max-w-6xl">
           <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 p-8 text-center border border-base-200/50 shadow-sm">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0))] opacity-40"></div>
                <span className="relative badge badge-primary badge-outline font-mono text-xs uppercase tracking-widest mb-3 px-3 py-2">
                    PhiMart Ecosystem
                </span>
                <h1 className="relative text-4xl md:text-5xl font-black tracking-tight text-base-content">
                    Explore <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Store Categories</span>
                </h1>
                <p className="relative mt-3 text-sm md:text-base text-base-content/60 max-w-xl mx-auto font-medium">
                    Seamlessly browse through catalog partitions, manage global inventories, and dispatch item nodes.
                </p>
            </div>
            
            {categories.map((category) => (
                <div key={category.id} className="bg-base-100 border border-base-200 rounded-2xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
                    
                    {/* Header Zone */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-base-200 pb-4 mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-800">{category.name}</h2>
                            <p className="text-sm text-base-content/70 mt-1 italic">{category.description || "No description provided."}</p>
                        </div>
                        <div className="badge badge-primary badge-lg gap-2 font-semibold">
                            {category.product_count} Products
                        </div>
                    </div>
                    
                    {/* Products Dynamic Area */}
                    <h3 className="text-lg font-semibold mb-4 text-base-content/80">Featured Inventory:</h3>
                    
                    {category.products && category.products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {category.products.map((product) => (
                                <div key={product.id} className="card bg-base-200 shadow-md border border-base-300 compact hover:scale-[1.05] transition-transform duration-200">
                                    
                                    {/* Product Images Container */}
                                    <figure className="px-3 pt-3 h-48 relative">
                                        {product.images && product.images.length > 0 ? (
                                            <img 
                                                src={product.images[0].image} 
                                                alt={product.name} 
                                                className="rounded-xl w-full h-full object-cover shadow-inner" 
                                            />
                                        ) : (
                                            <div className="bg-base-300 text-base-content/50 rounded-xl w-full h-full flex flex-col items-center justify-center font-medium text-xs text-center p-2">
                                                <span>No Media Image</span>
                                            </div>
                                        )}
                                        {product.stock <= 5 && product.stock > 0 && (
                                            <span className="absolute top-5 right-5 badge badge-warning badge-sm font-bold text-xs">Low Stock</span>
                                        )}
                                    </figure>

                                    {/* Product Meta */}
                                    <div className="card-body justify-between">
                                        <div>
                                            <h4 className="card-title text-base font-bold line-clamp-1">{product.name}</h4>
                                            <p className="text-xs text-base-content/60 line-clamp-2 mt-1">{product.description}</p>
                                        </div>
                                        <div className="mt-4 flex justify-between items-center mb-2">
                                            <span className="text-xl font-extrabold text-success">${product.price}</span>
                                            <span className="text-xs opacity-70">{(product.stock <= 1) ? "Quantity" : "Quantities"} {product.stock}</span>
                                        </div>

                                        {/* View Product Details Trigger Button */}
                                        <button 
                                            onClick={() => setSelectedProduct(product)}
                                            className="btn btn-primary btn-sm btn-outline rounded-xl mt-2 normal-case"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 bg-base-200 rounded-xl border border-dashed border-base-300 text-base-content/50 italic">
                            No products are currently tied to this category ecosystem.
                        </div>
                    )}
                </div>
            ))}

            {/* Render the Product details modal file dynamically when selectedProduct is populated */}
            <ProductViewModal 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        </div>
    );
};

export default CategoriesView;