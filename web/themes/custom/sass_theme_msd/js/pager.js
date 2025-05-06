let count = 1;
const pages = document.querySelectorAll('.page');
const pageNumbers = document.querySelectorAll('.page-number');

function nextPage() {
  count++;
  if (count > pages.length) {
    count = pages.length;
  }
  goToPage(count);
}

function previousPage() {
  count--;
  if (count < 1) {
    count = 1;
  }
  goToPage(count);
}

function goToPage(pageNumber) {
  // Hide all pages
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Remove active class from all page numbers
  pageNumbers.forEach(pageNumber => {
    pageNumber.classList.remove('active');
  });

  // Show the page corresponding to the current pageNumber
  let currentPage = document.getElementById(`page${pageNumber}`);
  if (currentPage) {
    // currentPage.style.display = 'block';
    currentPage.style.display = 'grid';
    // Add active class to the current page number
    document.querySelector(`.page-number:nth-child(${pageNumber})`).classList.add('active');
    count = pageNumber; // Update the global count variable
  }

  // Hide or show the previous, next, first, and last buttons based on the current page number
  if (count === 1) {
    document.getElementById('previous').style.display = 'none';
    document.getElementById('first').style.display = 'none';
  } else {
    document.getElementById('previous').style.display = 'inline';
    document.getElementById('first').style.display = 'inline';
  }

  if (count === pages.length) {
    document.getElementById('next').style.display = 'none';
    document.getElementById('last').style.display = 'none';
  } else {
    document.getElementById('next').style.display = 'inline';
    document.getElementById('last').style.display = 'inline';
  }
}

// Initialize the first page
goToPage(count);
