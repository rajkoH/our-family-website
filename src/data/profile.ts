// Profile data for surrogacy profile - Easy to modify
// Replace images with your own by updating the paths in src/assets/images/

export const profileData = {
  // Basic Information
  names: "Dylan & Ryan", // Your names
  location: "Toronto, Ontario, Canada", // Your location
  email: "contact@example.com", // Your contact email

  // Hero Section
  hero: {
    greeting: "Welcome",
    title: "We're Looking for a Special Partner",
    subtitle: "We are an intended parent couple seeking a compassionate surrogate to help us build our family. Our journey has led us here, and we are grateful you are taking the time to learn about us.",
    image: "~/assets/images/hero-image.png", // Replace with your photo
  },

  // About Section
  about: {
    title: "Our Story",
    description: "We are a loving couple who have always dreamed of starting a family. After years of trying, we have decided that surrogacy is the path that will help us realize our dream of becoming parents. We are looking for a surrogate who shares our values of love, respect, and family.",
    story: [
      {
        title: "Our Journey",
        description: "Our journey to parenthood has been filled with hope, challenges, and unwavering determination. We have explored various paths and have come to believe that surrogacy with the right partner is how we will build our family."
      },
      {
        title: "Our Values",
        description: "We value open communication, mutual respect, and creating a supportive environment for everyone involved in this process. Family means everything to us, and we are committed to building lasting relationships."
      },
      {
        title: "Our Promise",
        description: "We promise to be respectful, communicative, and supportive throughout this journey. We understand the incredible gift you would be giving us and are committed to making this experience positive for everyone involved."
      }
    ],
    images: [
      {
        src: "~/assets/images/default.png", // Replace with your photos
        alt: "Our family photo"
      }
    ]
  },

  // What We're Looking For
  lookingFor: {
    title: "What We're Looking For",
    items: [
      {
        title: "Connection",
        description: "We are looking for someone we can build a genuine connection with, whether you prefer to stay in touch or prefer a more private arrangement.",
        icon: "tabler:heart-handshake"
      },
      {
        title: "Communication",
        description: "We value open and honest communication throughout this journey. We want to ensure everyone feels comfortable and supported.",
        icon: "tabler:message-circle"
      },
      {
        title: "Compassion",
        description: "We are looking for someone who understands the emotional significance of this journey and is committed to working together with respect and kindness.",
        icon: "tabler:heart"
      },
      {
        title: "Health & Wellness",
        description: "We prioritize the health and wellbeing of everyone involved. We are looking for a surrogate who values their own health and is willing to work with medical professionals.",
        icon: "tabler:medical-cross"
      }
    ]
  },

  // Our Qualities
  qualities: {
    title: "A Bit About Us",
    items: [
      {
        title: "Committed Partners",
        description: "We have been together for many years and have built a stable, loving relationship. We are both committed to this journey and to creating a warm, supportive home."
      },
      {
        title: "Financially Stable",
        description: "We are financially prepared for this journey and will ensure all medical expenses and compensation are handled professionally and fairly."
      },
      {
        title: "Supportive Network",
        description: "We have a wonderful support network of family and friends who are excited about our journey and ready to welcome a new addition to our family."
      }
    ]
  },

  // Contact
  contact: {
    title: "Get in Touch",
    subtitle: "If you're interested in learning more about us or would like to connect, we'd love to hear from you. Please feel free to reach out through the form below.",
    message: "Thank you for considering being part of our journey. Your interest means the world to us."
  }
};

