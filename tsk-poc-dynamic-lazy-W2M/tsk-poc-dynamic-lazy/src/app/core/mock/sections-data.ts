export const SECTION_HERO = {
  uuid: '126133e4-118c-44a3-a9cd-ec0bef5e2a2e',
  id: null,
  type: 'section-hero',
  altText: 'centro-de-atencion-al-cliente-hero.jpg',
  hasContent: false,
  backgroundImage: 'assets/images/hero-1.jpeg',
  anchor: null,
  showBackground: false,
  components: [
    {
      type: 'component-subtitle',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      data: {
        subtitleColor: 'white',
        titleColor: 'white',
        title: 'Centro de atención al cliente',
      },
    },
  ],
}

export const SECTION_ICONS = {
  uuid: '126133e4-118c-44a3-a9cd-ec0bef5e2a2e',
  id: null,
  type: 'section-icons',
  anchor: null,
  backgroundColor: false,
  showBackground: false,
  components: [
    {
      type: 'component-icons',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      data: [
        {
          image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Covid-19---ATT---Tarifas.svg',
          backgroundColor: false,
          altText: 'Covid-19---ATT---Tarifas.svg',
          description: '<p>Si deseas obtener informaci&oacute;n sobre&nbsp;nuestra respuesta frente al '
          + 'COVID-19, por favor&nbsp;<a href="/viaje/seguridad/info-covid">haz clic aqu&iacute;'
          + '</a>.&nbsp;</p>\n',
          title: 'Covid-19',
        },
        {
          image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Necesitas-ayuda'
          + '---Revisa-la-documentación.svg',
          backgroundColor: false,
          altText: 'Necesitas-ayuda---Revisa-la-documentación.svg',
          description: '<p>Si tu consulta es de &iacute;ndole general probablemente encuentres la'
          + ' respuesta en nuestra secci&oacute;n de preguntas frecuentes.&nbsp;'
          + '<a href="/preguntas-frecuentes">Haz&nbsp;click&nbsp;aqu&iacute;</a>'
          + '&nbsp;para comprobarlo.&nbsp;</p>\n',
          title: '¿Necesitas ayuda?',
        },
        {
          image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Sobre.svg',
          backgroundColor: false,
          altText: 'Sobre.svg',
          description: '<p>Es informaci&oacute;n sobre los siguientes temas puedes clicar'
          + ' directamente sobre ellos para acceder a la informaci&oacute;n y los formularios'
          + ' correspondientes:&nbsp;<a href="/viaje/gestiona-factura">Facturas</a>,&nbsp;'
          + '<a href="/viaje/pasajeros/menores-formulario">UMs</a>,&nbsp;<a href="/viaje/pasajeros'
          + '/pasajeros-con-necesidades-especiales">Necesidades especiales&nbsp;(sillas de ruedas,'
          + 'dispositivos electr&oacute;nicos etc.)</a>.</p>\n\n<p>&nbsp;</p>\n',
          title: 'Si lo que necesitas',
        },
      ],
    },
  ],
}

export const SECTION_INFO_IMAGE_CARDS = {
  uuid: '126133e4-118c-44a3-a9cd-ec0bef5e2a2e',
  id: null,
  type: 'section-info-image-cards',
  anchor: null,
  backgroundColor: true,
  showBackground: false,
  components: [
    {
      type: 'component-info-text',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      data: {
        hasSeparator: true,
        orientation: 'vertical',
        subtitle: '<p>Si sigues sin encontrar lo que buscas&nbsp;puedes contactar con nosotros a trav&eacute;'
        + '(si has completado tu reserva por favor ten el n&uacute;mero a mano):&nbsp;</p>\n',
        position: 'right',
        title: 'Si sigues sin encontrar lo que buscas',
        fullwidth: false,
      },
      backgroundColor: true,
      imagePosition: 'left',
    },
    {
      type: 'component-image',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      data: {
        image: 'assets/images/card-image.jpeg',
        size: 'fulwidth',
        altText: 'centro-de-atencion-al-cliente-imagen-1.jpg',
        borderRadius: {
          bottomLeft: false,
          bottomRight: false,
          topLeft: false,
          topRight: true,
        },
        variation: 'is9',
        fullwidth: false,
      },
    },
    {
      type: 'component-cards',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      borderRadius: {
        bottomLeft: false,
        bottomRight: false,
        topLeft: false,
        topRight: false,
      },
      data: [
        {
          description: '<p>000 000 000<br />\n<br />\nEl coste de la llamada para llamadas;a es de *****</p>\n',
          title: 'Teléfono de atención al cliente',
        },
        {
          description: '<p>consulta a info@world2fly.com<br />\n<br />\n*Responderte en 48h.</p>\n',
          title: 'Dirección de correo electrónico',
        },
        {
          description: '<p>Nuestro horario de atenci&oacute;n al cliente es:</p>\n\n<ul>'
          + '\n\t<li>De lunes a s&aacute;bado&nbsp;</li>\n\t<li>De 9:00 a 21:30h</li>\n</ul>\n',
          title: 'Nuestros horario de atención',
        },
      ],
    },
    {
      type: 'component-cards-text',
      uuid: '26b5aadc-f50c-46b5-9425-7d0abfc858e6',
      information: '<blockquote>\n<p>* Si necesitas poner una reclamaci&oacute;n, te pedimos'
      + ' las m&aacute;s sinceras disculpas, sentimos las molestias que te hayamos podido causar.'
      + ' En el caso de que tu vuelo se haya visto afectado por un retraso o una cancelaci&oacute;n,'
      + ' puedes enviarnos tu reclamaci&oacute;n a trav&eacute;s de <a href="/reclamaciones">'
      + 'nuestro formulario</a>. En funci&oacute;n del tipo de reclamaci&oacute;n, te informaremos'
      + 'como proceder y te indicaremos la documentaci&oacute;n necesaria.</p>\n</blockquote>\n',
      data: [
        {
          backgroundColor: false,
          semidotColor: 'red',
          semidot: true,
          title: 'Teléfono de atención al cliente',
          content: '<ul>\n\t<li>900 92 40 40 para llamadas desde Espa&ntilde;a</li>\n\t<li>'
          + '(+34) 91 00 03 831 si llamas desde fuera de Espa&ntilde;a</li>\n</ul>\n',
        },
        {
          backgroundColor: false,
          buttons: [
            {
              textButton: 'Rellenar el formulario',
              externalLinkIcon: false,
              field: 'form',
              textGDPR: '<p>Antes de enviar el formulario, debes leer la Informaci&oacute;n b&aacute;sica'
              + ' sobre protecci&oacute;n de datos que se encuentra m&aacute;s abajo. Todos los campos'
              + ' marcados son obligatorios para la contrataci&oacute;n. Al pulsar el bot&oacute;n de'
              + ' env&iacute;o manifiestas haber le&iacute;do esta informaci&oacute;n.&nbsp;</p>\n\n<p>'
              + 'Informaci&oacute;n b&aacute;sica sobre privacidad: El responsable del tratamiento de sus'
              + ' datos es WORLD 2 FLY, S.L.U. La finalidad es la gesti&oacute;n de tu reserva y la'
              + ' prestaci&oacute;n de los servicios solicitados, fines de gesti&oacute;n contable'
              + ' y administrativa, cumplimiento de obligaciones legales en materia contable y fiscal,'
              + ' la operaci&oacute;n del vuelo y el cumplimiento de la normativa de seguridad en vuelos,'
              + ' aeropuertos y control de fronteras, as&iacute; como la elaboraci&oacute;n de estad&iacute;'
              + ' sticas an&oacute;nimas a partir de datos agregados de reservas para medir el rendimiento de'
              + ' nuestras rutas y servicios. Tienes derecho a solicitar el acceso a tus datos personales, su'
              + ' rectificaci&oacute;n, supresi&oacute;n o portabilidad, la limitaci&oacute;n de su tratamient,'
              + 'a oponerte al tratamiento, as&iacute; como a presentar una reclamaci&oacute;n ante una'
              + 'de protecci&oacute;n de datos. + info sobre el tratamiento de tus datos y tus derechos&nbsp;'
              + '<a href="/politica-privacidad">aqu&iacute;</a>.&nbsp;</p>\n',
              componentModal: 'component-form-booking',
            },
          ],
          semidotColor: 'turquoise',
          semidot: true,
          title: 'Si tu consulta es sobre una reserva',
          content: '<p>Puedes&nbsp;escribirnos&nbsp;rellenando el siguiente formulario</p>\n',
        },
        {
          backgroundColor: false,
          semidotColor: 'blue',
          semidot: true,
          title: 'Nuestro horario de atención',
          content: '<ul>\n\t<li>De lunes a viernes.</li>\n\t<li>Desde las&nbsp;09.00 h&nbsp;'
          + 'a las 18.00 h (CET)</li>\n</ul>\n',
        },
      ],
    },
  ],
}
