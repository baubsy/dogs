interface Image {
  url: string
}
interface IBreed {
    name: string,
    height: {imperial: string, metric: string},
    life_span: string,
    weight: {imperial: string, metric: string},
    avg_height?: number,
    avg_life_span?: number,
    avg_weight?: number,
    img?: string,
    image?: Image,
  }

export default IBreed;