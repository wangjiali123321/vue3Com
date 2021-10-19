<template>
  <div >
    {{readersNumber}}
    {{thead}}
      <!-- <jimTable
        :thead="thead"
        :operateConfig="operateConfig"
      ></jimTable> -->
  </div>
</template>
<script lang="ts">
import { defineComponent ,ref,reactive ,computed} from 'vue';

export default defineComponent({
  setup() {
    const readersNumber = ref(0)
    const thead = reactive([{
      prop: 'name',
      label: 'name'
    },{
      prop:'operation',
      label: 'titlw'
    }])
    const operateConfig = computed(() => {
      // let that = this;
      return {
        // optType: {
        //   toRemove: {event:'toRemove',text: 'remove',type:'danger'}
        // },
        // optFunc: function(val: any){
        //   if(val){
        //   }
        //   return  ['toRemove']
        // }
      }
    })
    return {
      readersNumber,
      thead,
      operateConfig
    }
  },
  components: {
  },
});
</script>
