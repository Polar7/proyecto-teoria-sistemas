export interface ResponseApiSimpson {
  docs: Array<SimpsonCharacter>,
  totalDocs: number,
  limit: number,
  totalPages: number,
  page: number;
}

export interface SimpsonCharacter {
  _id: string,
  Nombre: string,
  Historia: string,
  Imagen: string,
  Genero: string,
  Estado: string,
  Ocupacion: string;
}
