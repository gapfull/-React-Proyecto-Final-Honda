import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Modelos = React.lazy(() => import("../pages/Modelos/Modelos"));
const Modelo = React.lazy(() => import("../pages/Modelo/Modelo"));
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogDetail = React.lazy(() => import("../pages/BlogDetail/BlogDetail"));
const Contacto = React.lazy(() => import("../pages/Contacto/Contacto"));
const NotFound = React.lazy(() => import("./NotFound"));

const Main = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/modelos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Modelos />
              </React.Suspense>
            }
          />
          <Route
            path="/modelo/:modeloId"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Modelo />
              </React.Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Blog />
              </React.Suspense>
            }
          />
          <Route
            path="/blogdetail/:contentId"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <BlogDetail />
              </React.Suspense>
            }
          />

          <Route
            path="/contacto"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Contacto />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
