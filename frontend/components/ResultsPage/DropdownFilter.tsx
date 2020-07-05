import React, { useEffect, useState, useRef } from 'react';
import { pull } from 'lodash';
import { Option } from './filters';
import useClickOutside from './useClickOutside';
import '../../css/_DropdownFilter.scss';
import pillClose from '../images/pillClose.svg';

interface DropdownFilter {
  title: string,
  options: Option[],
  selected: string[],
  setActive: (a:string[])=>void
}
export default function DropdownFilter({
  title, options, selected, setActive,
}: DropdownFilter) {
  const [areOptionsFresh, setAreOptionsFresh] = useState(true)
  const [filterString, setFilterString] = useState('');
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setAreOptionsFresh(true);
  }, [options])

  const dropdown = useRef(null);

  useClickOutside(dropdown, isOpen, setIsOpen);

  function handleClickOnTheDropdown() {
    if (areOptionsFresh) {
      // calculate the new options
      // if any selected no longer exist, remove them (filter)
      setAreOptionsFresh(false)
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className='DropdownFilter'>
      <div className='DropdownFilter__title'>{title}</div>
      <div className='DropdownFilter_dropdown' ref={ dropdown } role='button' tabIndex={ 0 } onClick={ handleClickOnTheDropdown }>
        <div className='DropdownFilter__search'>
          {selected.map((selectElement) => (
            <a className='DropdownFilter__inputElement'>
              { selectElement }
              <img
                src={ pillClose }
                className='DropdownFilter__inputDelete'
                alt='X to remove pill'
                onClick={ () => setActive(pull(selected, selectElement)) }
              />
            </a>
          ))}
          <input
            className='DropdownFilter__input'
            tabIndex={ 0 }
            type='text'
            value={ filterString }
            placeholder={ selected.length === 0 ? 'Choose one or multiple' : '' }
            onChange={ (event) => setFilterString(event.target.value) }
          />
          <span className='DropdownFilter__icon' role='button' tabIndex={ -1 }>&#9660;</span>
        </div>
        <div className='DropdownFilter__selectable'>
          {isOpen && options.filter((option) => option.value.toUpperCase().includes(filterString.toUpperCase()) && !selected.includes(option.value)).map((option) => (
            <div
              role='option'
              tabIndex={ -1 }
              aria-selected='true'
              aria-checked='false'
              className='DropdownFilter__element'
              key={ option.value }
              onClick={ () => { setActive(selected.includes(option.value) ? pull(selected, option.value) : [...selected, option.value]) } }
            >
              <span className='DropdownFilter__elementText'>{option.value}</span>
              <span className='DropdownFilter__elementCount'>({option.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
