<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <div style="margin: 80px auto; width: 700px">
            <h1 class="text-center">Create New Order</h1>
            <form action="./add.php" method="post">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">User Name</span>
                    <input type="text" class="form-control" name="username" placeholder="User Name" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">User Sur Name</span>
                    <input type="text" class="form-control" name="usersurname" placeholder="User Sur Name" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="email" class="form-control"name="email" placeholder="exemple@mail.ru" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Phone</span>
                    <input type="text" class="form-control" name="phone" placeholder="+37499110011" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Address</span>
                    <input type="text" class="form-control"name="address" placeholder="Yerevan / Armenia" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Weight (kg)</span>
                    <input type="number" class="form-control" min="5" name="weight"  placeholder="min 5 kg" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Sort</label>
                    <select class="form-select" id="inputGroupSelect01" name="sort">
                        <option value="paper">Paper</option>
                        <option value="plastic">Plastic</option>
                        <option value="metal">Metal</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Desired Day And Time</span>
                    <input type="datetime-local" class="form-control" name="datetime" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3" style="margin: 10px auto;display: flex;justify-content: center">
                    <input type="submit" class="btn btn-success" value="SAVE">
                </div>
            </form>
        </div>
        <?php
            if (isset($_SESSION["msg"]["success"])){
        ?>
            <div id="msgBox">
                <div class="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3" style="width: 700px;margin: 0 auto">
                    <?=$_SESSION["msg"]["success"];?>
                </div>
            </div>
        <?php
            unset($_SESSION["msg"]["success"]);
        }elseif (isset($_SESSION["msg"]["error"])){
        ?>
                <div id="msgBox">
                    <div class="p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3" style="width: 700px;margin: 0 auto">
                        <?=$_SESSION["msg"]["error"];?>
                    </div>
                </div>
        <?php
        }
        ?>





    </div>
    <script>
        msgBox = document.getElementById("msgBox");
        setTimeout(() => {
            msgBox.innerHTML=""
        }, 10000);
    </script>
</body>
</html>