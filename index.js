// --> custom javascript linked to the main page
let theme_button = document.getElementById("theme-button");
let login_container = document.getElementById("login-box");
let login_p_tag = document.getElementById("login-box").getElementsByTagName("p");
let OptionButton = document.getElementsByClassName("option");
let Visibility_button = document.getElementById("visibility-button")

theme_button.addEventListener("click", () => {
  if (theme_button.classList.contains("bi-moon-stars-fill")) {
    theme_button.classList.replace(
      "bi-moon-stars-fill",
      "bi-brightness-high-fill"
    );
    document.body.classList.add("dark-theme");
    login_container.classList.add("bg-dark", "shadow-lg");

    // all paragraphs in the login container changes to white in dark mode
    for (let i = 0; i < login_p_tag.length; i++) {
      login_p_tag[i].classList.add("text-white");
      console.log(login_p_tag[i])
    }

    // option button also changes in appearance
    for (let i = 0; i < OptionButton.length; i++) {
      OptionButton[i].classList.add("text-white");
    }
  } else {
    theme_button.classList.replace(
      "bi-brightness-high-fill",
      "bi-moon-stars-fill"
    );
    document.body.classList.remove("dark-theme");
    login_container.classList.remove("bg-dark");
    // all paragraphs in the login container changes to white in dark mode
    for (let i = 0; i < login_p_tag.length; i++) {
      login_p_tag[i].classList.remove("text-white");
    }

    // option button also changes in appearance
    for (let i = 0; i < OptionButton.length; i++) {
      OptionButton[i].classList.remove("text-white");
    }
  }
});

Visibility_button.addEventListener('click', ()=> {
    let password_entry = document.getElementById("password-input")
    if (password_entry['type'] == "password") {
        Visibility_button.innerText = "hide"
        password_entry['type'] = 'text'
    } else {
        Visibility_button.innerText = 'show'
        password_entry['type'] = 'password'
    }
});
