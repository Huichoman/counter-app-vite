export const getImagen = async () => {
  try {
    const apiKey = "rnY4RhqwuO7FUe1Fl9Q93dzyTKOqZ337";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    console.log("url > ", url);
    return url;

    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
    return "Image was not found";
  }
};
