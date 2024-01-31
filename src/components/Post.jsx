import './post.css'
import { useState } from 'react'
import { FaHeart, FaRegHeart, FaTrashAlt } from 'react-icons/fa'

function Post({ id, titulo, imagem, conteudo, onDelete }) {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(88)
    const [img, setImg] = useState(imagem)

    function apagar() {
        onDelete(id)
    }

    function handleLike() {
        if (isLiked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }

        setIsLiked(!isLiked)
    }

    function handleRandomizedImg(){
        let i = img.substring(0, imagem.length - 2)
        setImg( i + (Math.random() * 88))
    }

    return (
        <div className="post">
            <h1 className="header">{titulo}</h1>
            <div className='bin'>
                <span>
                    <FaTrashAlt onClick={apagar}/>
                </span>
            </div>
            <img src={img} alt={titulo} onClick={handleRandomizedImg}/>
            <p className="content">{conteudo}</p>
            <div className='curtidas'>
                <span>{likes} curtidas</span>
                { isLiked ? (
                    <FaHeart fill='#f09' onClick={handleLike} />
                ): (
                    <FaRegHeart onClick={handleLike} />
                )}
            </div>
        </div>
    )
}

export default Post