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
    nameCategory: "Programacion"
  },
  {
    nameCategory: "Estructura de datos"
  },
  {
    nameCategory: "Diseño UI/UX"
  },
  {
    nameCategory: "Testing"
  },
  {
    nameCategory: "Inteligencia Artificial"
  },
  {
    nameCategory: "Frameworks"
  },
  {
    nameCategory: "Arquitectura de sistemas"
  },
]

const seedSectionTitles = [
  {
    sectionTitle: "Origen"
  },
  {
    sectionTitle: "Historia"
  },
  {
    sectionTitle: "Tipos de datos"
  },
  {
    sectionTitle: "Aprendizaje"
  },
  {
    sectionTitle: "Versiones"
  },
  {
    sectionTitle: "Caracteristicas"
  },
  {
    sectionTitle: "Uso"
  },
  {
    sectionTitle: "Referencias"
  },
]

const seedSectionImages = [
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/1_dv4wno.jpg",
    cloudinaryImageId: "wikideas_sectionImages/1_dv4wno"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/12_co6jva.png",
    cloudinaryImageId: "wikideas_sectionImages/12_co6jva"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/11_twnl2g.jpg",
    cloudinaryImageId: "wikideas_sectionImages/11_twnl2g"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/7_iwrlkp.jpg",
    cloudinaryImageId: "wikideas_sectionImages/7_iwrlkp"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/2_deximy.jpg",
    cloudinaryImageId: "wikideas_sectionImages/2_deximy"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433328/wikideas_sectionImages/10_ltaren.jpg",
    cloudinaryImageId: "wikideas_sectionImages/10_ltaren"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/9_ffqmby.jpg",
    cloudinaryImageId: "wikideas_sectionImages/9_ffqmby"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/8_rtb3qv.png",
    cloudinaryImageId: "wikideas_sectionImages/8_rtb3qv"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/5_klaebe.jpg",
    cloudinaryImageId: "wikideas_sectionImages/5_klaebe"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/6_po3nhc.jpg",
    cloudinaryImageId: "wikideas_sectionImages/6_po3nhc"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433327/wikideas_sectionImages/3_l6mqcl.jpg",
    cloudinaryImageId: "wikideas_sectionImages/3_l6mqcl"
  },
  {
    sectionImage: "https://res.cloudinary.com/dtlhzceh8/image/upload/v1684433326/wikideas_sectionImages/4_mhkf8w.jpg",
    cloudinaryImageId: "wikideas_sectionImages/4_mhkf8w"
  },

]

const seedSections = [
  {
    sectionTitleId: "6466e40207aecb30fc9a35f2",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a35fc"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f3",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a35fd"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f4",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a35fe"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f5",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a35ff"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f6",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a3600"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f7",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a3601"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f8",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a3602"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f9",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a3603"
  },
  {
    sectionTitleId: "6466e40207aecb30fc9a35f6",
    sectionDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sectionImageId: "6466e40307aecb30fc9a3604"
  }
]

const seedPublications = [
  {
    numberPublication:"1",
    topic: "Arquitectura de sistemas",
    categoryId: "6466e40207aecb30fc9a35e9",
    detail: [
      "6466e83710ca0070cbe99c57",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c59"
    ]
  },
  {
    numberPublication:"2",
    topic: "Patrones de Diseño",
    categoryId: "6466e83610ca0070cbe99c36",
    detail: [
      "6466e83710ca0070cbe99c5f",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c5e"
    ]
  },
  {
    numberPublication:"3",
    topic: "Estructuras de datos",
    categoryId: "6466e83610ca0070cbe99c37",
    detail: [
      "6466e83710ca0070cbe99c5a",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c5f"
    ]
  },
  {
    numberPublication:"4",
    topic: "CSS Frameworks",
    categoryId: "6466e83610ca0070cbe99c38",
    detail: [
      "6466e83710ca0070cbe99c5f",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c5e"
    ]
  },
  {
    numberPublication:"5",
    topic: "Bootstrap",
    categoryId: "6466e83610ca0070cbe99c39",
    detail: [
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c57",
      "6466e83710ca0070cbe99c59"
    ]
  },
  {
    numberPublication:"6",
    topic: "React JS",
    categoryId: "6466e83610ca0070cbe99c3a",
    detail: [
      "6466e83710ca0070cbe99c59",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c57"
    ]
  },
  {
    numberPublication:"7",
    topic: "Angular JS",
    categoryId: "6466e83610ca0070cbe99c3b",
    detail: [
      "6466e40207aecb30fc9a35f6",
      "6466e83710ca0070cbe99c5d",
      "6466e83710ca0070cbe99c59"
    ]
  },
  {
    numberPublication:"8",
    topic: "Svelte",
    categoryId: "6466e83610ca0070cbe99c3c",
    detail: [
      "6466e83710ca0070cbe99c5a",
      "6466e83710ca0070cbe99c59",
      "6466e83710ca0070cbe99c58"
    ]
  },
  {
    numberPublication:"9",
    topic: "Pruebas unitarias de testeo",
    categoryId: "6466e83610ca0070cbe99c36",
    detail: [
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c5a",
      "6466e83710ca0070cbe99c59"
    ]
  },
  {
    numberPublication:"10",
    topic: "Material UI",
    categoryId: "6466e83610ca0070cbe99c39",
    detail: [
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c57",
      "6466e83710ca0070cbe99c59"
    ]
  },
  {
    numberPublication:"11",
    topic: "Astro",
    categoryId: "6466e83610ca0070cbe99c3a",
    detail: [
      "6466e83710ca0070cbe99c59",
      "6466e83710ca0070cbe99c58",
      "6466e83710ca0070cbe99c57"
    ]
  },
  {
    numberPublication:"12",
    topic: "Next JS",
    categoryId: "6466e83610ca0070cbe99c3b",
    detail: [
      "6466e40207aecb30fc9a35f6",
      "6466e83710ca0070cbe99c5d",
      "6466e83710ca0070cbe99c59"
    ]
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

seedDB().then(()=>{
  mongoose.connection.close();
})