<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
    <?php
      require('./loader.class.php');
      $loader = new Loader('./map.json');
      $loader->loadCss('index');
    ?>
    
  </head>
  <body>
  
  <div class="outline">
   <h1>WebPack是什么</h1>
   <ul>
    <li>1.一个打包工具</li>
    <li>2.一个模块加载工具</li>
    <li>3.各种资源</li>
    <li>4.网站<a href="#">http://webpack.gihub.io/</a></li>
   </ul>
  </div>
  
  <div id="root">
  </div>
  
  <?php
    $loader->loadJs('vendor');
  ?>
  
  <?php
    $loader->loadJs('index');
  ?>
  
  <?php
    $loader->loadJs('detail');
  ?>
  
  
  </body>
</html>