import React from 'react';
import '../styles/control-buttons.less';


function ControlButtons() {
    return (
        <div className='control-buttons'>
            <div className='command-key hotkeys__droplink'>
                ⌘
                <div className='hotkeys__dropdown'>
                    <div className='hotkeys__group'>
                        <p className='hotkeys__title'>Группа команд</p>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                    </div>

                    <div className='hotkeys__group'>
                        <p className='hotkeys__title'>Группа команд</p>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                    </div>

                    <div className='hotkeys__group'>
                        <p className='hotkeys__title'>Группа команд</p>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                        <div className='hotkeys__command'>
                            <span className='hotkeys__key'>Ctrl</span>
                            <span className='hotkeys__plus'>+</span>
                            <span className='hotkeys__key'>C</span>
                            <span className='hotkeys__do'>Команда</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='view-key view-key--active' />
        </div>
    );
}

export default ControlButtons;
