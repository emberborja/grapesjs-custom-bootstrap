export default (editor, config = {}) => {
    const deviceManager = editor.DeviceManager;
    deviceManager.devices = [];

    const addDevice = device => deviceManager.add(device.name, device.width, device.opts);
    const deviceList = [
        {
            name: 'Extra Small',
            width: '575px',
            opts: {},
        },
        {
            name: 'Small',
            width: '768px',
            // opts: {widthMedia: '768'},
        },
        {
            name: 'Medium',
            width: '992px',
            // opts: {widthMedia: '992'},
        },
        {
            name: 'Large',
            width: '1200px',
            // opts: {widthMedia: '1200'},
        },
        {
            name: 'Extra Large',
            width: '100%',
            opts: {},
        },
    ];
    deviceList.forEach(addDevice);

    const commands = editor.Commands;
    const addCommand = cmd => commands.add(cmd.id, cmd.command);
    const deviceCommands = [
            {id: 'set-device-xs', command: editor => editor.setDevice('Extra Small')},
            {id: 'set-device-sm', command: editor => editor.setDevice('Small')},
            {id: 'set-device-md', command: editor => editor.setDevice('Medium')},
            {id: 'set-device-lg', command: editor => editor.setDevice('Large')},
            {id: 'set-device-xl', command: editor => editor.setDevice('Extra Large')},
        ];
    deviceCommands.forEach(addCommand);

    const panels = editor.Panels;
    const panelDevices = panels.addPanel({
        id: 'devices-buttons',
        visible  : true,
        buttons  : [
            {
                id: 'deviceXl',
                command: 'set-device-xl',
                className: 'fa fa-desktop',
                attributes: { title: 'Extra Large' },
                active: 1
            },
            {
                id: 'deviceLg',
                command: 'set-device-lg',
                className: 'fa fa-desktop',
                attributes: { title: 'Large' }
            },
            {
                id: 'deviceMd',
                command: 'set-device-md',
                className: 'fa fa-tablet',
                attributes: { title: 'Medium' }
            },
            {
                id: 'deviceSm',
                command: 'set-device-sm',
                className: 'fa fa-mobile',
                attributes: { title: 'Small' }
            },
            {
                id: 'deviceXs',
                command: 'set-device-xs',
                className: 'fa fa-mobile',
                attributes: { title: 'Extra Small' }
            }
        ],
    });

  }  
	