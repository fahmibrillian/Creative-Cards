<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <nav-header @pageWasChanged="currentPage = $event"></nav-header>
          <keep-alive>
            <component :is="currentPage"></component>
          </keep-alive>
          <ccFooter>
            <p class="text-center">&copy; {{appName}}</p>
            <nav>
              <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link">Home</a></li>
                <li class="nav-item"><a class="nav-link">About Us</a></li>
                <li class="nav-item"><a class="nav-link">Content</a></li>
              </ul>
            </nav>
          </ccFooter>
        </div>
      </div>
    </div>
</template>

<script>
  import firebaseConfig from './firebaseConfig'
  import Header from './components/Header'
  import Footer from './components/Footer'
  import cardFront from './components/card/CardFront'
  import cardInsideLeft from './components/card/CardInsideLeft'
  import cardInsideRight from './components/card/CardInsideRight'
  import cardBack from './components/card/CardBack'

  export default {
    data : function(){
      return {
        currentPage : 'cardFront',
        appName : 'Creative Cards'
      }
    },
    components : {
      navHeader : Header,
      cardFront: cardFront,
      cardInsideLeft: cardInsideLeft,
      cardInsideRight: cardInsideRight,
      cardBack: cardBack,
      ccFooter: Footer
    }
  }
</script>

<style>
  body {
    font-family: Verdana , Geneva, sans-serif !important;
  }

  .nav-link{
    color: #333 !important;
    cursor: pointer;
  }
</style>
