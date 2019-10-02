export default (editor, config = {}) => {
    const deviceManager = editor.DeviceManager;
    deviceManager.devices = [];

    const addDevice = device => deviceManager.add(device.name, device.widgth, device.opts);
    const deviceList = [
        {
            name: 'Extra Small',
            widgth: '575px',
            opts: {},
        },
        {
            name: 'Small',
            widgth: '767px',
            opts: {widthMedia: '768'},
        },
        {
            name: 'Medium',
            widgth: '991px',
            opts: {widthMedia: '992'},
        },
        {
            name: 'Large',
            widgth: '1199px',
            opts: {widthMedia: '1200'},
        },
        {
            name: 'Extra Large',
            widgth: '100%',
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
	