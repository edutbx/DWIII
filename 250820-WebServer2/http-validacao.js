function geraArrayDeURL(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validaURL(arrayLinks){
    return geraArrayDeURL(arrayLinks);
}

export default validaURL;