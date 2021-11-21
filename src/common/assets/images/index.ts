import imagesProps from '../../interfaces/images'

// Images
import horizontal from './marca_horizontal.svg'
import vertical from './marca.svg'

// Animations
import loading from './animations/loading.json'
import error from './animations/error404.json'

const Images: imagesProps = {
  logos: {
    horizontal,
    vertical,
  },
  animations: {
    loading,
    error,
  },
}

export default Images
