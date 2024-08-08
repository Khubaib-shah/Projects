// Import area
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  database,
  ref,
  set,
} from "./javaScript/firebase.js";

// Variable section
const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signupBTN = document.getElementById("signupBTN");
const signinBTN = document.getElementById("signinBTN");

// Sign-up function
async function handleSignUp() {
  // Style area
  nameField.style.maxHeight = "60px";
  title.textContent = "Sign up";
  signupBTN.classList.remove("disable");
  signinBTN.classList.add("disable");

  // Sign up area
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await set(ref(database, "users/" + user.uid), {
      username: name,
      email: email,
    });
    nameInput.value = "";
    alert("Account created successfully!");

    nameField.style.maxHeight = "0";
    title.textContent = "Sign In";
    signinBTN.classList.remove("disable");
    signupBTN.classList.add("disable");
  } catch (error) {
    alert(error.message);
  }
}

// Sign-in function
async function handleSignIn() {
  // Style area
  nameField.style.maxHeight = "0";
  title.textContent = "Sign In";
  signinBTN.classList.remove("disable");
  signupBTN.classList.add("disable");

  // Sign in area
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user.uid;
    await set(ref(database, "users/" + user), {
      email: email,
    });
    emailInput.value = "";
    passwordInput.value = "";
    alert("Account Login successfully!");
    window.location.href = "./pages/home.html";
  } catch (error) {
    alert(error.message);
  }
}

// Attach event listeners
signupBTN.onclick = handleSignUp;
signinBTN.onclick = handleSignIn;
