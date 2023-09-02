import React from 'react'

const HeaderText = ({headerText,color,underline,size,font_weight}) => {
    if(underline === true) {
        return (
            <div className="flex justify-center items-center">
                <h2 className={`text-${color} text-2xl m-5 underline text-${size} ${font_weight} font-pacifico`}>{headerText}</h2>
            </div>
          )
    } else {
        return (
            <div className="flex justify-center items-center">
                <h2 className={`text-${color} text-2xl m-5 text-${size} ${font_weight} font-pacifico`}>{headerText}</h2>
            </div>
          )
    }

}

export default HeaderText;