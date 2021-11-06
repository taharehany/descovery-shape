<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="description" content="">
   <meta property="og:title" content="Dscovery Shape">
   <meta property="og:type" content="The type">
   <meta property="og:url" content="http://url.com/">
   <meta property="og:image" content="http://image.jpg">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <meta name="keywords" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap" rel="stylesheet">
   <title>Dscovery Shape | Contact Response</title>
   <link rel="stylesheet" href="css/bootstrap.min.css">
   <link rel="stylesheet" href="css/animate.min.css" />
   <link rel="stylesheet" href="css/image-zoom.css" />
   <link rel="stylesheet" href="css/style.css">
</head>

<body>
   <!-- header -->
   <header>
      <div class="top-part">
         <div class="container">
            <div class="logo">
               <a href="index.html">
                  <img src="images/logo.png" class="img-fluid" alt="">
               </a>
            </div>
         </div>
      </div>
      <nav class="navbar">
         <div class="container">
            <div class="content">
               <ul>
                  <li>
                     <a href="iphone11Pro.html">
                        <img src="images/ic1.jpg" class="img-fluid" alt="">
                        <span>iPhone 11 Pro</span>
                     </a>
                  </li>
                  <li>
                     <a href="iphone11.html">
                        <img src="images/ic2.jpg" class="img-fluid" alt="">
                        <span>iPhone 11</span>
                     </a>
                  </li>
                  <li>
                     <a href="iphonese.html">
                        <img src="images/ic3.jpg" class="img-fluid" alt="">
                        <span>iPhone SE</span>
                     </a>
                  </li>
                  <li>
                     <a href="airpodspro.html">
                        <img src="images/ic4.jpg" class="img-fluid" alt="">
                        <span>AirPods Pro</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </header>
   <!-- header -->

    <style>
    body {
        text-align: center;
        height: auto;
    }

    .main {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center
    }

    h3 {
        line-height: 2;
        text-align: center;
        direction: rtl
    }

    footer {
        position: absolute;
        height: auto;
        width: 100%;
        bottom: 0;
    }
    </style>

    <!-- /menubar -->
    <main class="main">
        <div class="container">
            <h3>
                <?php
                    $email= "info@descoverydxb.com";
                    if (!empty($_POST)){
                        if(empty($_POST['name']) or empty($_POST['number']) or empty($_POST['email']) or empty($_POST['message'])){
                            echo("You did not fill in all the fields");
                        }
                        else{
                            $message  = "name :\n{$_POST["name"]}\n";
                            $message .= "number :\n{$_POST["number"]}\n";
                            $message .= "email :\n{$_POST["email"]}\n";
                            $message .= "message :\n{$_POST["message"]}\n";
                            $message .= "IP :\n{$_SERVER['REMOTE_ADDR']}\n";
                            $message = stripslashes($message);
                            $message = wordwrap($message, 70);
                            mail($email,"Descovery Shape",$message,"From: {$_POST["name"]} <{$_POST["email"]}>");
                            echo("Your message has been received and we will contact you as soon as possible.");
                        }
                    }
                ?>
            </h3>
        </div>
    </main>

    <!-- footer -->
   <footer>
      <div class="container">
         <div class="copyrights">
            <p>Copyright © All Rights Reserved | Decovery Shape 2021</p>
         </div>
      </div>
   </footer>
   <!-- footer -->
   <script src="js/jquery.min.js"></script>
   <script src="js/bootstrap.bundle.min.js"></script>
   <script src="js/image-zoom.min.js"></script>
   <script src="js/script.js"></script>
</body>

</html>
