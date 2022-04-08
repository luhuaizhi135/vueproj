<template>
  <div>
    <TypeNav />
    <ListContainer/>
    <Recommand/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommand from './Recommand'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'

export default {
  name: "Home",
  components:{
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState(['count'])
  }
};
</script>

<style>
</style>