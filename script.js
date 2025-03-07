let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-images img");
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  document.querySelector(".carousel-images").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

// Optional: Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 2000);

// Hàm di chuyển slide cho carousel phòng nghỉ
function moveSlidePn(step) {
  const slides = document.querySelectorAll(".carouselpn-images img");
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Nếu currentIndex nhỏ hơn 0, chuyển sang ảnh cuối cùng
  } else if (currentIndex >= slides.length) {
    currentIndex = 0; // Nếu currentIndex vượt quá số lượng ảnh, quay lại ảnh đầu tiên
  }

  document.querySelector(".carouselpn-images").style.transform = `translateX(-${
    currentIndex * 100
  }%)`; // Cập nhật vị trí của carousel
}

// Tự động chuyển slide mỗi 3 giây
setInterval(() => {
  moveSlidePn(1);
}, 3000);
