<template>
  <div class="notificacoes">
    <article
      class="message is-success"
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">{{ notificacao.titulo }}</div>
      <div class="message-body">
        <p>{{ notificacao.texto }}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { notificacoesType } from "@/types/notificacoes";

export default defineComponent({
  name: "notificações-projetos",
  data() {
    return {
      contexto: {
        [notificacoesType.SUCESSO]: "is-success",

        [notificacoesType.ALERTA]: "is-warning",
        [notificacoesType.FALHA]: "is-danger",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 300px;
  width: 100%;
  padding: 8px;
  z-index: 1;
}
</style>
