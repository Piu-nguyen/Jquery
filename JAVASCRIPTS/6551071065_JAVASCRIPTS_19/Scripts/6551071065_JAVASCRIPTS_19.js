const moviePrices = {
  "Mat biec": 45000,
  "Avengers": 45000,
  "Em chua 18": 45000
};

const showtimeMultipliers = {
  "10h": 1.0,
  "12h": 1.2,
  "15h": 1.5,
  "18h": 2.0
};

const roomMultipliers = {
  "Vang": 1.0,
  "Do": 1.2,
  "Xanh": 1.5
};

document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const customer = document.getElementById("customer").value;
  const date = document.getElementById("date").value;
  const movie = document.getElementById("movie").value;
  const showtime = document.getElementById("showtime").value;
  const room = document.getElementById("room").value;
  const seats = Array.from(document.getElementById("seat").selectedOptions).map(opt => opt.value);

  if (!movie || seats.length === 0) {
    alert("Vui lòng chọn phim và ít nhất một ghế.");
    return;
  }

  const basePrice = moviePrices[movie];
  const showMultiplier = showtimeMultipliers[showtime];
  const roomMultiplier = roomMultipliers[room];

  let receiptHTML = `
    <h3>Hóa đơn</h3>
    <p>Khách hàng: ${customer}</p>
    <p>Ngày chiếu: ${date}</p>
    <p>Giờ chiếu: ${showtime}</p>
    <p>Phim: ${movie}</p>
    <p>Phòng chiếu: ${room}</p>
    <table class="seat-table">
      <tr><th>Ghế</th><th>Giá vé</th></tr>
  `;

  let total = 0;
  seats.forEach(seat => {
    const price = basePrice * showMultiplier * roomMultiplier;
    total += price;
    receiptHTML += `<tr><td>${seat}</td><td>${price.toLocaleString()} đ</td></tr>`;
  });

  receiptHTML += `</table><p><strong>Tổng tiền: ${total.toLocaleString()} đ</strong></p>`;
  document.getElementById("receipt").innerHTML = receiptHTML;
});