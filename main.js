'use strict'

const V = process.env.SSF_SALT || '4dxjYzF6.2M/EK5a1mO"H&-s7;_NTWf@8=Ig0*eZw3B \'k:9RD%h#+rPXGluUqnCAQypLSovcbtJiV'

module.exports = {
    E: (T) => {
        let X = ''

        for (let i in T) {
            X += V.indexOf(T[i])
            if ( i < T.length - 1 ) X += '-'
        }

        return X
    },

    D: (T) => {
        T = T.split('-')
        let X = ''
        
        T.forEach(F => X += V[parseInt(F)])
        return X
    }
}