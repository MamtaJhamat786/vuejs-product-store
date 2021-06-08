<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/all-products" >Products</b-nav-item>
        <b-nav-item to="create-product" >Create Product</b-nav-item>
         <b-nav-item to="/about" >About</b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: "Navbar"

}
</script>

<style>

</style>