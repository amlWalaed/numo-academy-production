document.addEventListener("DOMContentLoaded", () => {
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const arrow = item.querySelector(".faq-arrow");

        question.addEventListener("click", () => {
          const isVisible = answer.style.display === "block";

          // Close all answers
          document
            .querySelectorAll(".faq-answer")
            .forEach((ans) => (ans.style.display = "none"));
          document
            .querySelectorAll(".faq-arrow")
            .forEach((arr) => (arr.src = "images/icons/arrow-down.svg"));

          // Toggle the clicked answer
          if (!isVisible) {
            answer.style.display = "block";
            arrow.src = "images/icons/arrow-up.svg";
          }
        });
      });

      // Ensure the first item is open by default as per the design
      const firstItem = faqItems[0];
      if (firstItem) {
        firstItem.querySelector(".faq-answer").style.display = "block";
        firstItem.querySelector(".faq-arrow").src = "images/icons/arrow-up.svg";
      }
    });