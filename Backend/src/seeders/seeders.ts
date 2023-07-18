import mongoose from 'mongoose';
import { dbConnection } from '../db/dbConnectionMongoose';
import Category from '../models/category.model';
import SectionTitle from '../models/sectionTitle.model';
import SectionImage from '../models/sectionImage.model';
import Section from '../models/section.model';
import Publication from '../models/publication.model';


const MONGODB_URI: any = process.env.MONGODB_URI || 5000;

async function runConnection(): Promise<mongoose.Connection> {
  const conn = dbConnection.getInstance(MONGODB_URI);
  const db = await conn.getConnection();
  return db;
}
try {
  const resultConnection = runConnection();
  function delayedLogStatusConnection() {
    resultConnection.then(data => console.log('Conexion status:', data.readyState));
  }
  setTimeout(delayedLogStatusConnection, 6000);
} catch (error) {
  throw new Error('An error ocured when the app tried connect with de database');
}

const seedCategories = [
  {
    categoryId: "1",
    nameCategory: "Programacion",
    active: true
  },
  {
    categoryId: "2",
    nameCategory: "Estructura de datos",
    active: true
  },
  {
    categoryId: "3",
    nameCategory: "Diseño UI/UX",
    active: true
  },
  {
    categoryId: "4",
    nameCategory: "Testing",
    active: true
  },
  {
    categoryId: "5",
    nameCategory: "Inteligencia Artificial",
    active: true
  },
  {
    categoryId: "6",
    nameCategory: "Frameworks",
    active: true
  },
  {
    categoryId: "7",
    nameCategory: "Arquitectura de sistemas",
    active: true
  },
]

const seedSectionTitles = [
  {
    sectionTitleId: "1",
    sectionTitle: "Origen",
    active: true
  },
  {
    sectionTitleId: "2",
    sectionTitle: "Historia",
    active: true
  },
  {
    sectionTitleId: "3",
    sectionTitle: "Tipos de datos",
    active: true
  },
  {
    sectionTitleId: "4",
    sectionTitle: "Aprendizaje",
    active: true
  },
  {
    sectionTitleId: "5",
    sectionTitle: "Versiones",
    active: true
  },
  {
    sectionTitleId: "6",
    sectionTitle: "Caracteristicas",
    active: true
  },
  {
    sectionTitleId: "7",
    sectionTitle: "Uso",
    active: true
  },
  {
    sectionTitleId: "8",
    sectionTitle: "Referencias",
    active: true
  },
]

const seedSectionImages = [
  {
    sectionImageId: "1",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/1_dv4wno.jpg",
    cloudinaryImageId: "wikideas_sectionImages/1_dv4wno",
    active: true
  },
  {
    sectionImageId: "2",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/12_co6jva.png",
    cloudinaryImageId: "wikideas_sectionImages/12_co6jva",
    active: true
  },
  {
    sectionImageId: "3",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/11_twnl2g.jpg",
    cloudinaryImageId: "wikideas_sectionImages/11_twnl2g",
    active: true
  },
  {
    sectionImageId: "4",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/7_iwrlkp.jpg",
    cloudinaryImageId: "wikideas_sectionImages/7_iwrlkp",
    active: true
  },
  {
    sectionImageId: "5",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/2_deximy.jpg",
    cloudinaryImageId: "wikideas_sectionImages/2_deximy",
    active: true
  },
  {
    sectionImageId: "6",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/10_ltaren.jpg",
    cloudinaryImageId: "wikideas_sectionImages/10_ltaren",
    active: true
  },
  {
    sectionImageId: "7",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/9_ffqmby.jpg",
    cloudinaryImageId: "wikideas_sectionImages/9_ffqmby",
    active: true
  },
  {
    sectionImageId: "8",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/8_rtb3qv.png",
    cloudinaryImageId: "wikideas_sectionImages/8_rtb3qv",
    active: true
  },
  {
    sectionImageId: "9",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/5_klaebe.jpg",
    cloudinaryImageId: "wikideas_sectionImages/5_klaebe",
    active: true
  },
  {
    sectionImageId: "10",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/6_po3nhc.jpg",
    cloudinaryImageId: "wikideas_sectionImages/6_po3nhc",
    active: true
  },
  {
    sectionImageId: "11",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/3_l6mqcl.jpg",
    cloudinaryImageId: "wikideas_sectionImages/3_l6mqcl",
    active: true
  },
  {
    sectionImageId: "12",
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433326/wikideas_sectionImages/4_mhkf8w.jpg",
    cloudinaryImageId: "wikideas_sectionImages/4_mhkf8w",
    active: true
  },

]

const seedSections = [
  {
    sectionId: "1",
    sectionTitleId: "1",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "1",
    active: true
  },
  {
    sectionId: "2",
    sectionTitleId: "2",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "2",
    active: true
  },
  {
    sectionId: "3",
    sectionTitleId: "3",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "3",
    active: true
  },
  {
    sectionId: "4",
    sectionTitleId: "4",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "4",
    active: true
  },
  {
    sectionId: "5",
    sectionTitleId: "5",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "5",
    active: true
  },
  {
    sectionId: "6",
    sectionTitleId: "6",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6",
    active: true
  },
  {
    sectionId: "7",
    sectionTitleId: "7",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "7",
    active: true
  },
  {
    sectionId: "8",
    sectionTitleId: "8",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "8",
    active: true
  },
  {
    sectionId: "9",
    sectionTitleId: "9",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "9",
    active: true
  }
]

const seedPublications = [
  {
    publicationId: "1",
    topic: "Arquitectura de sistemas",
    categoryId: "1",
    detail: [
      "1",
      "2",
      "3"
    ],
    active: true
  },
  {
    publicationId: "2",
    topic: "Patrones de Diseño",
    categoryId: "2",
    detail: [
      "4",
      "5",
      "6"
    ],
    active: true
  },
  {
    publicationId: "3",
    topic: "Estructuras de datos",
    categoryId: "2",
    detail: [
      "7",
      "8",
      "9"
    ],
    active: true
  },
  {
    publicationId: "4",
    topic: "CSS Frameworks",
    categoryId: "2",
    detail: [
      "1",
      "2",
      "3"
    ],
    active: true
  },
  {
    publicationId: "5",
    topic: "Bootstrap",
    categoryId: "4",
    detail: [
      "4",
      "5",
      "6"
    ],
    active: true
  },
  {
    publicationId: "6",
    topic: "React JS",
    categoryId: "4",
    detail: [
      "7",
      "8",
      "9"
    ],
    active: true
  },
  {
    publicationId: "7",
    topic: "Angular JS",
    categoryId: "5",
    detail: [
      "1",
      "2",
      "3"
    ],
    active: true
  },
  {
    publicationId: "8",
    topic: "Svelte",
    categoryId: "6",
    detail: [
      "4",
      "5",
      "6"
    ],
    active: true
  },
  {
    publicationId: "9",
    topic: "Pruebas unitarias de testeo",
    categoryId: "6",
    detail: [
      "7",
      "8",
      "9"
    ],
    active: true
  },
  {
    publicationId: "10",
    topic: "Material UI",
    categoryId: "7",
    detail: [
      "1",
      "2",
      "3"
    ],
    active: true
  },
  {
    publicationId: "11",
    topic: "Astro",
    categoryId: "8",
    detail: [
      "4",
      "5",
      "6"
    ],
    active: true
  },
  {
    publicationId: "12",
    topic: "Next JS",
    categoryId: "9",
    detail: [
      "7",
      "8",
      "9"
    ],
    active: true
  },
]

const seedDB = async () => {
  await Category.deleteMany({});
  await Category.insertMany(seedCategories);
  await SectionTitle.deleteMany({});
  await SectionTitle.insertMany(seedSectionTitles);
  await SectionImage.deleteMany({});
  await SectionImage.insertMany(seedSectionImages);
  await Section.deleteMany({});
  await Section.insertMany(seedSections);
  await Publication.deleteMany({});
  await Publication.insertMany(seedPublications);
}

seedDB().then(() => {
  mongoose.connection.close();
})