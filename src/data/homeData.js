const hero = {
  title: 'Pengelola Sampah Masyarakat',
  subtitle: 'Klasifikasi sampah 12 jenis menggunakan Convolutional Neural Networks (CNN)',
  desc: 'Aplikasi yang mengintegrasikan model Machine Learning Image Classification untuk klasifikasi 12 jenis sampah secara End-to-End bagi pengguna.',
  video: '/video/hero.webm',
  image: '/img/hero.webp',
  cta: 'Mulai Sekarang',
};

const about = {
  title: 'Apa itu ReWWiS Apps?',
  desc: 'Aplikasi ini merupakan aplikasi yang mengintegrasikan model Machine Learning Image Classification secara End-to-End untuk memberikan klasifikasi 12 jenis sampah yang mudah dipahami bagi pengguna tanpa harus menjalankan model Machine Learning pada Kode Notebook Python.',
  image: '/img/about-illustration.webp',
};

const steps = {
  title: 'Bagaimana cara menggunakannya?',
  stepsBody: [
    {
      id: 0,
      title: 'Pilih Gambar',
      desc: 'Pilih gambar sampah yang ingin diklasifikasikan.',
      image: '/img/steps/input.webp',
    },
    {
      id: 1,
      title: 'Klasifikasikan',
      desc: 'Model Machine Learning akan mengklasifikasikan sampah yang dipilih berdasarkan 12 jenis sampah.',
      image: '/img/steps/classify.webp',
    },
    {
      id: 2,
      title: 'Hasil Klasifikasi',
      desc: 'Hasil klasifikasi akan ditampilkan berupa jenis dan kategori sampah, serta persentase kecocokan.',
      image: '/img/steps/result.webp',
    },
  ],
};

const featured = {
  title: 'Keunggulan Aplikasi',
  subtitle: 'Aplikasi ini memiliki beberapa fitur yang dapat membantu pengguna dalam mengklasifikasikan sampah.',
  features: [
    {
      id: 0,
      title: 'Klasifikasi 12 Jenis Sampah',
      desc: 'Aplikasi ini dapat mengklasifikasikan sampah menjadi 12 jenis dan kategori sampah, serta persentase kecocokan.',
      image: '/img/featured/12-types-of-trash.webp',
    },
    {
      id: 1,
      title: 'Mudah Digunakan',
      desc: 'Aplikasi ini dapat digunakan oleh siapa saja tanpa harus mengerti tentang Machine Learning.',
      image: '/img/featured/easy-to-use.webp',
    },
    {
      id: 2,
      title: 'End-to-End',
      desc: 'Aplikasi ini mengintegrasikan model Machine Learning secara End-to-End berbasis Web, sehingga pengguna tidak perlu menginstall Python dan menjalankan model Machine Learning pada Kode Notebook Python.',
      image: '/img/featured/end-to-end.webp',
    },
  ],
};

const footer = {
  copy: '2023 ReWWiS Apps | SIB Orbit Future Academy Team 1. All rights reserved.',
  viewOnGithub: {
    title: 'View on Github',
    url: 'https://github.com/chndrwali/PengelolaSampahMasyarakat',
  },
  twitter: {
    title: 'View On Twitter',
    url: 'https://twitter.com/chndrwali',
  },
  linkedin: {
    title: 'View On Linkedin',
    url: 'https://linkedin.com/in/chndrwali',
  },
  instagram: {
    title: 'View On Instagram',
    url: 'https://instagram.com/chndrwali',
  },
};

export {
  hero, about, steps, featured, footer,
};