document.getElementById("get-started-btn").addEventListener("click", () => {
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  if (password == "123456") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
    document.getElementById("banner-1").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("banner-2").style.display = "block";
    document.getElementById("banner-3").style.display = "block";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter username and valid Password",
    });
  }
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
});

document.getElementById("password").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (password == "123456") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      document.getElementById("banner-1").style.display = "none";
      document.getElementById("header").style.display = "block";
      document.getElementById("banner-2").style.display = "block";
      document.getElementById("banner-3").style.display = "block";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter username and valid Password",
      });
    }
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
  }
});

document.getElementById("Log-Out").addEventListener("click", () => {
  document.getElementById("banner-1").style.display = "flex";
  document.getElementById("header").style.display = "none";
  document.getElementById("banner-2").style.display = "none";
  document.getElementById("banner-3").style.display = "none";
});

const FAQ = document.getElementById("FAQ");
FAQ.addEventListener("click", () => {
  document.getElementById("banner-3").scrollIntoView({ behavior: "smooth" });
});
const learn = document.getElementById("LEARN");
LEARN.addEventListener("click", () => {
  document.getElementById("banner-2").scrollIntoView({ behavior: "smooth" });
});
