<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link to="/"><a class="navbar-brand" href="#">Ürünler</a></router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/urun-islemleri"><a class="navbar-brand" href="#">Ürün Listesi</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/urun-cikisi"><a class="navbar-brand" href="#">Ürün Çıkışı</a></router-link>
            </li>
        </ul>
    </div>
</nav>
</template>