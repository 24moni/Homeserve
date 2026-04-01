
  // Button click handlers
  // Get modal elements
const bookingModal = document.getElementById('bookingModal');
const subscriptionModal = document.getElementById('subscriptionModal');

// Get buttons
const bookNowBtn = document.getElementById('book-now-btn');
const subscribeBtn = document.getElementById('subscribe-btn');

// Get close buttons
const closeBooking = document.getElementById('closeBooking');
const closeSubscription = document.getElementById('closeSubscription');

// Show modals
bookNowBtn.addEventListener('click', () => bookingModal.style.display = 'block');
subscribeBtn.addEventListener('click', () => subscriptionModal.style.display = 'block');

// Close modals
closeBooking.addEventListener('click', () => bookingModal.style.display = 'none');
closeSubscription.addEventListener('click', () => subscriptionModal.style.display = 'none');

// Close on outside click
window.addEventListener('click', (e) => {
  if(e.target === bookingModal) bookingModal.style.display = 'none';
  if(e.target === subscriptionModal) subscriptionModal.style.display = 'none';
});

// Form submissions (demo)
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Booking submitted! (demo)');
  bookingModal.style.display = 'none';
  e.target.reset();
});
document.getElementById('subscriptionForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Subscription successful! (demo)');
  subscriptionModal.style.display = 'none';
  e.target.reset();
});
