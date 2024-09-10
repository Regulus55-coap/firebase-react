import logo from "./logo.svg";
import "./App.css";
import { auth, firestore, storage } from "./firebaseConfig";

// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firestore에서 'product' 컬렉션에서 '상품1' 문서 가져오기
    const fetchProduct = async () => {
      try {
        console.log("Fetching product...");
        const docRef = firestore.collection("product").doc("상품1");
        const doc = await docRef.get();
        console.log("Document data:", doc.data());
        if (doc.exists) {
          setProduct(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>안녕</h1>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h2>{product.이름}</h2>
          <p>{product.가격}</p>
          {/* 필요한 다른 필드도 여기에 추가 */}
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
}

export default App;
