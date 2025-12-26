const scriptURL = "https://script.google.com/macros/s/AKfycbzxdmVt3m6AW4auTUZqDw5oUyUcbx_7rQ3KPT_hCGlpBueRUryKGy_s2-RIHjbMTvqTSg/exec";
const form = document.forms["rafi-contact-form"];
const BtnKirim = document.querySelector(".submit");
const BtnLoading = document.querySelector(".loading");
const MyAlert = document.querySelector(".alert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  BtnLoading.classList.toggle("dnone");
  BtnKirim.classList.toggle("dnone");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, Hilangkan Tombol Loading
      BtnLoading.classList.toggle("dnone");
      BtnKirim.classList.toggle("dnone");
      // Tampilkan Alert
      MyAlert.classList.toggle("dnone");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Tombol Close Alert
const closeAlert = document.querySelector(".close");
closeAlert.addEventListener("click", (e) => {
  e.preventDefault();
  MyAlert.classList.add("dnone");
});
