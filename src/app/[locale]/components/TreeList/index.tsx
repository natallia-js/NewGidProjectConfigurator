import ListItemSign from './ListItemSign';

interface Props {
  dataArray: string[];
}

export default function TreeList({ dataArray }: Props): React.JSX.Element {
  /*
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
*/
  return (
    <ul role="list">
      {(dataArray || []).map(item => {
        return (
          <li key={item} className="flex justify-between gap-x-2 py-2">
            <a
              data-te-collapse-init
              href="#collapseThree"
              role="button"
              aria-expanded="false"
              aria-controls="collapseThree"
              className="flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary">
              <ListItemSign/>
              {item}
            </a>
          </li>
        )})}
    </ul>
  );
};
