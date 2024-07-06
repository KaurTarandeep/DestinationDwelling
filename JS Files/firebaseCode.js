//  // firebase code.............................................
//
//  <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"></script>  
//
//           const firebaseConfig = {
//             apiKey: "AIzaSyBVfgaoPpVCH2iavcGHLhkubAxmMgu1dYA",
//             authDomain: "destinationdwellings-3821d.firebaseapp.com",
//             databaseURL: "https://destinationdwellings-3821d-default-rtdb.asia-southeast1.firebasedatabase.app",
//             projectId: "destinationdwellings-3821d",
//             storageBucket: "destinationdwellings-3821d.appspot.com",
//             messagingSenderId: "26977027743",
//             appId: "1:26977027743:web:e0c0a63e2f3c4fb2aa04aa",
//             measurementId: "G-DBCWYKB88T"
//           };

//           // Initialize Firebase
//           const app = initializeApp(firebaseConfig);
//           const analytics = getAnalytics(app);
//           const database = firebase.database();

//           // Function to handle form submission
//           document.getElementById('signupForm').addEventListener('submit', function(event) {
//               event.preventDefault(); // Prevent form submission
              
//               // Get form values
//               const username = document.getElementById('username').value;
//               const email = document.getElementById('email').value;
//               const password = document.getElementById('password').value;
  
//               // Save data to Firebase Realtime Database
//               database.ref('users').push({
//                   username: username,
//                   email: email,
//                   password: password
//               });
  
//               // Clear form fields
//               document.getElementById('username').value = '';
//               document.getElementById('email').value = '';
//               document.getElementById('password').value = '';
  
//               // Redirect to success page or show a success message
//               // window.location.href = "success.html";
          
//      });

















