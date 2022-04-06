import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Accordion = () => {
  return <div class="accordion" >
  <div class="accordion-item">
    <h2 class="accordion-header" >
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  >
        Taupantiems
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Norite pradėti taupyti? įrašykite sumą po kurios norite gauti pranešimą savo programėlėje</p>
        <InputGroup className="mb-3">
                    <FormControl 
                        type='number'
                        min={1}
                        placeholder="Suma"
                    />
                </InputGroup>
      </div>
    </div>
  </div>
</div>
};

export default Accordion;
