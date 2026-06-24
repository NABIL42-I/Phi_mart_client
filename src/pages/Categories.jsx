import { useState, useEffect } from 'react';
import CategoriesView from '../components/Categories/CategoriesView';
import apiClient from '../services/api-client';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetchCategories = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get("/categories/");
            setCategories(response.data);
        } catch (error) {
            console.log("Error fetching categories", error);
            setError(error.response?.data?.detail || "Error loading categories");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFetchCategories();
    }, []);

    // Skeleton Loaders Design Block
    if (loading) {
        return (
            <div className="container mx-auto p-6 max-w-6xl space-y-8">
                <div className="h-10 w-64 bg-base-300 skeleton mx-auto rounded-lg"></div>
                {[1, 2].map((n) => (
                    <div key={n} className="p-6 border border-base-200 rounded-2xl space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="h-8 w-48 bg-base-300 skeleton rounded"></div>
                            <div className="h-6 w-24 bg-base-300 skeleton rounded-full"></div>
                        </div>
                        <div className="h-4 w-full bg-base-300 skeleton rounded"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {[1, 2, 3, 4].map((p) => (
                                <div key={p} className="h-64 bg-base-200 skeleton rounded-xl"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Error UI Component Block
    if (error) {
        return (
            <div className="container mx-auto p-6 max-w-md mt-12">
                <div className="alert alert-error shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Error:</strong> {error}</span>
                </div>
            </div>
        );
    }

    return(
    <div>
        <CategoriesView categories={categories} />;
    </div>
    )

};

export default Categories;