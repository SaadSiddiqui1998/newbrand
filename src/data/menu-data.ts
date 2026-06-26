import { IMenuDT } from "@/types/menu-d-t";


const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    // home_menus: [
    //   { title: 'MAIN HOME', link: '/', img: '/assets/img/menu/white-version/home-1.jpg' },
    //   { title: 'Fashion STUDIO', link: '/home-2', img: '/assets/img/menu/white-version/home-2.jpg' },
    //   { title: 'CREATIVE AGENCY', link: '/home-3', img: '/assets/img/menu/white-version/home-3.jpg' },
    //   { title: 'Digital Agency', link: '/home-4', img: '/assets/img/menu/white-version/home-4.jpg' },
    //   { title: 'DESIGN STUDIO', link: '/home-5', img: '/assets/img/menu/white-version/home-5.jpg' },
    //   { title: 'Minimal Shop', link: '/home-6', img: '/assets/img/menu/white-version/home-6.jpg' },
    //   { title: 'DESIGN STUDIO', link: '/home-7', img: '/assets/img/menu/white-version/home-7.jpg' },
    //   { title: 'showcase carousel', link: '/home-8', img: '/assets/img/menu/white-version/home-8.jpg' },
    //   { title: 'INTERACTIVE LINKS', link: '/home-9', img: '/assets/img/menu/white-version/home-9.jpg' },
    //   { title: 'wrapper slider', link: '/home-10', img: '/assets/img/menu/white-version/home-10.jpg' },
    //   { title: 'showcase parallax', link: '/home-11', img: '/assets/img/menu/white-version/home-11.jpg' },
    //   { title: 'horizontal', link: '/home-12', img: '/assets/img/menu/white-version/home-12.jpg' },
    // ]
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    services_mega_menu: {
      services: [
        {
          title: 'Book Publishing',
          desc: 'Bringing your story to the shelves and screens of the world.',
          link: '/service-details',
          icon: 'fa-light fa-paper-plane',
        },
        {
          title: 'Book Editing',
          desc: 'We turn your drafts into masterpieces.',
          link: '/service-details',
          icon: 'fa-light fa-file-lines',
        },
        {
          title: 'Proofreading',
          desc: 'Catching every typo, ensuring perfection.',
          link: '/service-details',
          icon: 'fa-light fa-clipboard-check',
        },
        {
          title: 'Book Formatting',
          desc: 'Giving your words the perfect structure.',
          link: '/service-details',
          icon: 'fa-light fa-text-size',
        },
        {
          title: 'Typesetting & Layout',
          desc: 'Aligning your content with professional precision.',
          link: '/service-details',
          icon: 'fa-light fa-object-group',
        },
        {
          title: 'Audio Book',
          desc: 'Turn your written words into lively audio experiences.',
          link: '/service-details',
          icon: 'fa-light fa-microphone-lines',
        },
        {
          title: 'Print On Demand',
          desc: 'Streamline your book printing process with our expert Print-On-Demand Services.',
          link: '/service-details',
          icon: 'fa-light fa-print',
        },
        {
          title: 'Document Processing',
          desc: 'Simplify your workflows with expert document processing.',
          link: '/service-details',
          icon: 'fa-light fa-file-invoice',
        },
        {
          title: 'ISBN & Barcode',
          desc: 'Secure your book’s identity with our ISBN registration services.',
          link: '/service-details',
          icon: 'fa-light fa-barcode',
        },
        {
          title: 'Merchandising',
          desc: 'Make your personal and business accessories standout with custom merchandising services.',
          link: '/service-details',
          icon: 'fa-light fa-shirt',
        },
        {
          title: 'Book Marketing',
          desc: 'Boost your book’s reach and visibility with our targeted marketing strategies.',
          link: '/service-details',
          icon: 'fa-light fa-bullhorn',
        },
        {
          title: "Children's Book Illustration",
          desc: 'Bring your children’s stories to life with engaging and colorful illustrations.',
          link: '/service-details',
          icon: 'fa-light fa-palette',
        },
        {
          title: 'Book Illustration Services',
          desc: 'Enhance your book’s visual appeal with professional illustration designs.',
          link: '/service-details',
          icon: 'fa-light fa-pen-nib',
        },
        {
          title: 'Book Translation',
          desc: 'Expand your global reach with expert translation in multiple languages.',
          link: '/service-details',
          icon: 'fa-light fa-language',
        },
      ],
      experts: [
        { name: 'Emily Jones', image: '/assets/img/home-01/team/team-1-1.jpg' },
        { name: 'Steve Hayes', image: '/assets/img/home-01/team/team-1-2.jpg' },
        { name: 'Rex Brown', image: '/assets/img/home-01/team/team-1-3.jpg' },
        { name: 'Lia Sinclair', image: '/assets/img/home-01/team/team-1-4.jpg' },
        { name: 'Jerome Preston', image: '/assets/img/home-01/team/team-1-6.jpg' },
      ],
    }
  },
  {
    id: 4,
    title: 'Packages',
    link: '/pricing',
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '/portfolio',
    // portfolio_mega_menus: {
    //   first: {
    //     title: 'PORTFOLIO LIST',
    //     submenus: [
    //       {
    //         id: 1,
    //         menu_lists: [
    //           { title: 'Standard', link: '/portfolio-standard' },
    //           { title: 'Interactive', link: '/home-10' },
    //           { title: 'random', link: '/portfolio-random' },
    //           { title: 'showcase parallax', link: '/home-11' },
    //           { title: 'Masonry random', link: '/portfolio-masonry' },
    //           { title: 'Vertical Carousel', link: '/home-12' },
    //           { title: 'wrapper', link: '/portfolio-wrapper' },
    //         ]
    //       },
    //       {
    //         id: 2,
    //         menu_lists: [
    //           { title: 'horizontal', link: '/portfolio-showcase' },
    //           { title: 'Image Slider', link: '/home-7' },
    //           { title: 'wrapper Slider', link: '/home-11' },
    //           { title: 'parallax showcase', link: '/portfolio-showcase' },
    //           { title: 'Perspective Slider', link: '/home-9' },
    //         ]
    //       }
    //     ]
    //   },
    //   second: {
    //     submenus: [
    //       {
    //         id: 1,
    //         title: 'List Layouts',
    //         menu_lists: [
    //           { title: 'two-columns', link: '/portfolio-grid-col-2' },
    //           { title: 'three-columns', link: '/portfolio-grid-col-3' },
    //           { title: 'three-columns Wide', link: '/portfolio-grid-col-3-fullwidth' },
    //           { title: 'four-columns', link: '/portfolio-grid-col-4' },
    //           { title: 'four-columns Wide', link: '/portfolio-grid-col-4-fullwidth' },
    //         ]
    //       },
    //       {
    //         id: 2,
    //         title: 'PORTFOLIO SINGLES',
    //         menu_lists: [
    //           { title: 'Creative', link: '/portfolio-showcase-details-2' },
    //           { title: 'images Small', link: '/portfolio-details-1' },
    //           { title: 'Sliding', link: '/portfolio-details-2' },
    //           { title: 'Image Comparison', link: '/portfolio-details-comparison' },
    //           { title: 'Video', link: '/portfolio-details-video' },
    //           { title: 'CUSTOM LIGHT', link: '/portfolio-custom-light' },
    //           { title: 'Gallery', link: '/portfolio-showcase-details' },
    //           { title: 'Mockups', link: '/portfolio-details-3' },
    //         ]
    //       },
    //     ]
    //   }
    // }
  },
  {
    id: 6,
    title: 'Blog',
    link: '/',
    // dropdown_menus: [
    //   { title: 'Modern', link: '/blog-modern' },
    //   { title: 'Classic Sidebar', link: '/blog-classic' },
    //   { title: 'Minimal List', link: '/blog-list' },
    //   { title: 'Post Single', link: '/blog-details' },
    //   { title: 'Post With Sidebar', link: '/blog-details-2' },
    // ]
  },
  {
    id: 7,
    title: 'Contact',
    link: '/contact',
    // dropdown_menus: [
    //   { title: 'Contact', link: '/contact' },
    //   { title: 'Get IN touch', link: '/contact-2' },
    // ]
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      dropdown_menus: [
        { title: 'MAIN HOME', link: '/' },
        { title: 'Fashion STUDIO', link: '/home-2' },
        { title: 'CREATIVE AGENCY', link: '/home-3' },
        { title: 'Digital Agency', link: '/home-4' },
        { title: 'DESIGN STUDIO', link: '/home-5' },
        { title: 'Minimal Shop', link: '/home-6' },
        { title: 'DESIGN STUDIO', link: '/home-7' },
        { title: 'showcase carousel', link: '/home-8' },
        { title: 'INTERACTIVE LINKS', link: '/home-9' },
        { title: 'wrapper slider', link: '/home-10' },
        { title: 'showcase parallax', link: '/home-11' },
        { title: 'horizontal', link: '/home-12' },
      ]
    },
    {
      id: 2,
      title: 'Pages',
      link: '#',
      dropdown_menus: [
        { title: 'ABOUT US', link: '/about-us' },
        { title: 'FAQ Page', link: '/faq' },
        { title: 'ABOUT ME', link: '/about-me' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Team Page', link: '/team' },
        { title: 'OUR CLIENTS', link: '/brand' },
        { title: 'Team Details', link: '/team-details' },
        { title: 'Register', link: '/register' },
        { title: 'OUR SERVICES', link: '/service' },
        { title: 'LogIn', link: '/login' },
        { title: 'SERVICES DETAILS', link: '/service-details' },
        { title: 'ERROR PAGE', link: '/error' },
        { title: 'Shop Page', link: '/shop' },
        { title: 'Shop Details One', link: '/shop-details/1' },
        { title: 'Shop Details Two', link: '/shop-details-2' },
        { title: 'my account', link: '/account' },
        { title: 'Cart', link: '/cart' },
        { title: 'Checkout', link: '/checkout' },
        { title: 'Wishlist', link: '/wishlist' },
      ]
    },
    {
      id: 3,
      title: 'Packages',
      link: '/pricing',
      dropdown_menus: []
    },
    {
      id: 4,
      title: 'Portfolio',
      link: '/portfolio',
      dropdown_menus: [
        { title: 'Standard', link: '/portfolio-standard' },
        { title: 'Interactive', link: '/home-10' },
        { title: 'random', link: '/portfolio-random' },
        { title: 'showcase parallax', link: '/home-11' },
        { title: 'Masonry random', link: '/portfolio-masonry' },
        { title: 'Vertical Carousel', link: '/home-12' },
        { title: 'wrapper', link: '/portfolio-wrapper' },
        { title: 'horizontal', link: '/portfolio-showcase' },
        { title: 'Image Slider', link: '/home-7' },
        { title: 'wrapper Slider', link: '/home-11' },
        { title: 'parallax showcase', link: '/portfolio-showcase' },
        { title: 'Perspective Slider', link: '/home-9' },
        { title: 'two-columns', link: '/portfolio-grid-col-2' },
        { title: 'three-columns', link: '/portfolio-grid-col-3' },
        { title: 'three-columns Wide', link: '/portfolio-grid-col-3-fullwidth' },
        { title: 'four-columns', link: '/portfolio-grid-col-4' },
        { title: 'four-columns Wide', link: '/portfolio-grid-col-4-fullwidth' },
        { title: 'Creative', link: '/portfolio-showcase-details-2' },
        { title: 'images Small', link: '/portfolio-details-1' },
        { title: 'Sliding', link: '/portfolio-details-2' },
        { title: 'Image Comparison', link: '/portfolio-details-comparison' },
        { title: 'Video', link: '/portfolio-details-video' },
        { title: 'CUSTOM LIGHT', link: '/portfolio-custom-light' },
        { title: 'Gallery', link: '/portfolio-showcase-details' },
        { title: 'Mockups', link: '/portfolio-details-3' },
      ]
    },
    {
      id: 5,
      title: 'Blog',
      link: '/',
      dropdown_menus: [
        { title: 'Modern', link: '/blog-modern' },
        { title: 'Classic Sidebar', link: '/blog-classic' },
        { title: 'Minimal List', link: '/blog-list' },
        { title: 'Post Single', link: '/blog-details/1' },
        { title: 'Post With Sidebar', link: '/blog-details-2' },
      ]
    },
    {
      id: 6,
      title: 'Contact',
      link: '/',
      dropdown_menus: [
        { title: 'Contact', link: '/contact' },
        { title: 'Get IN touch', link: '/contact-2' },
      ]
    }
  ]
