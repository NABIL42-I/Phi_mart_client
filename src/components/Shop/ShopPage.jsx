import React, { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProducts from '../../hooks/useFetchProducts';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';

const ShopPage = () => {
    // const [products,setProducts] = useState([]);
    // const [loading,setLoading] = useState(true);
    // const [totalPages,setTotalPages] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [priceRange,setPriceRange] = useState([0,1000]);
    const [searchQuery,setSearchQuery] = useState("")
    const [selectedCategory,setSelectedCategory] = useState("")
    const [sortOrder,setSortOrder] = useState("")

    const {products,loading,totalPages} = useFetchProducts(currentPage,priceRange,selectedCategory,searchQuery,sortOrder);

    const categories = useFetchCategories();
    
    const handlePriceChange = (index,value)=>{
        setPriceRange((prev)=>{
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    }

//     useEffect(()=>{
// fetchProducts();
//     } , [currentPage]) //when dependancy change


//     const fetchProducts = async()=>{
//         setLoading(true);
//         try{
//             const response = await apiClient.get(`/products/?page=${currentPage}`);
//             const data = await response.data;
//             setProducts(data.results);
//             setTotalPages(Math.ceil(data.count/data.results.length));
//         }
//         catch (error){
//             console.log(error);
//         }
//         finally{
//             setLoading(false);
//         }
//     } 

// const fetchProducts = ()=>{
// apiClient
// .get(`/products/?page=${currentPage}`)
// .then((res)=>{ setProducts(res.data.results);
//     setTotalPages(Math.ceil(res.data.count/res.data.results.length
//     ))
// })
// .catch((error)=>console.log(error))
// .finally(()=>setLoading(false))
// }

    return (
        <div className = "max-w-7xl mx-auto px-4 py-8">
            <FilterSection priceRange={priceRange} handlePriceChange={handlePriceChange} categories = {categories} selectedCategory = {selectedCategory}
            handleCategoryChange={setSelectedCategory} searchQuery = {searchQuery} handleSearchQuery={setSearchQuery}
            sortOrder={sortOrder} handleSorting={setSortOrder}
            />
            <ProductList products={products} loading={loading}/>
            <Pagination totalPages = {totalPages} currentPage = {currentPage} handlePageChange = {setCurrentPage}/>
        </div>
    );
};



export default ShopPage;