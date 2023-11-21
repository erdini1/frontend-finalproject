<template>
  <header v-if="isAuthenticated()" class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Laboratorio IV</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div class="flex lg:hidden"></div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link
          to="/usuarios"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Usuarios</router-link
        >
        <router-link
          to="/libros"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Libros</router-link
        >
        <router-link
          to="/prestamos"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Prestamos</router-link
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
          @click="logout"
          class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
        >
          Cerrar Sesión <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const isAuthenticated = () => store.getters.isAuthenticated;

// store.watch(isAuthenticated, (newVal) => {
//   isAuthenticated.value = newVal;
// });

const logout = () => {
  // Limpiar el token y la autenticación
  store.commit("clearToken");

  // Redirigir a la página de inicio de sesión
  router.push("/login");
};
</script>
