export function imgTagify(planet) {
  let tag = document.createElement('img');
  tag.setAttribute('class', 'planet-img');
  tag.setAttribute('src', planet);

  return tag;
}