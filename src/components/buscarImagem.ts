import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const buscarImagem = (nomeImagem: string): Promise<string | null> => {
  return getDocs(collection(db, "imagens"))
    .then(querySnapshot => {
      for (let i = 0; i < querySnapshot.size; i++) {
        const documentos = querySnapshot.docs[i];

        if (documentos.id === nomeImagem) {
          return documentos.data().url;  // Retorna a URL diretamente
        }
      }
      return null;  // Retorna null se não encontrar a imagem
    })
    .catch(error => {
      console.error("Erro ao buscar as imagens:", error);
      return null;  // Retorna null em caso de erro
    });
};
