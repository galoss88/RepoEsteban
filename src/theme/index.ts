/* istanbul ignore file */
export const theme = {
  text: {
    color: {
      principal: '#EB9F1A',
      texts: '#FFFFFF',
      background: '#131313',
      alternative: '#CE0327',
      card: '#222222',
      active: '#03CE2F',
    },
    type: {
      h1: {
        lineHeight: '32px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '25px',
          },
          desktop: {
            fontSize: '25px',
          },
        },
      },
      h2: {
        lineHeight: '25px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '20px',
          },
          desktop: {
            fontSize: '20px',
          },
        },
      },
      h3: {
        lineHeight: '25px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '18px',
          },
          desktop: {
            fontSize: '18px',
          },
        },
      },
      body: {
        lineHeight: '18px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '14px',
          },
          desktop: {
            fontSize: '16px',
          },
        },
      },
      body2: {
        lineHeight: '21px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '14px',
          },
          desktop: {
            fontSize: '18px',
          },
        },
      },
      description: {
        lineHeight: '48px',
        weight: {
          bold: {
            fontWeight: '700',
          },
          regular: {
            fontWeight: '400',
          },
        },
        screenSize: {
          mobile: {
            fontSize: '18px',
          },
          desktop: {
            fontSize: '14px',
          },
        },
      },
    },
    alignment: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
    },
    textAlignment: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
    },
  },

  button: {
    type: {
      default: {
        backgroundColor: '#EB9F1A',
        color: '#FFFFFF',
        borderColor: '#EB9F1A',
      },
      outline: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        borderColor: '#EB9F1A',
      },
      disabled: {
        backgroundColor: '#A0A0A0',
        color: '#FFFFFF',
        borderColor: '#A0A0A0',
      },
      black: {
        backgroundColor: '#222222',
        color: '#FFFFFF',
        borderColor: '#222222',
      },
      transparent: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: '#EB9F1A',
        borderColor: 'rgba(0,0,0,0.1)',
      },
      text: {
        backgroundColor: '#131313',
        color: '#FFFFFF',
        borderColor: '#131313',
      },
    },
    sizes: {
      xxs: {
        fontSize: '16px',
        lineHeight: '18px',
        width: '150px',
        height: '31px',
      },
      xs: {
        fontSize: '16px',
        lineHeight: '17px',
        width: '125px',
        height: '37px',
      },
      sm: {
        fontSize: '16px',
        lineHeight: '21px',
        width: '180px',
        height: '48px',
      },
      md: {
        fontSize: '18px',
        lineHeight: '24px',
        width: '385px',
        height: '48px',
      },
    },
    borderRadius: {
      pill: '20px',
      normal: '5px',
    },
  },

  modal: {
    size: {
      default: {
        width: 'auto',
        height: 'auto',
      },
      xs: {
        width: '562px',
        height: '460px',
      },
      sm: {
        width: '384px',
        height: '647px',
      },
      md: {
        width: '335px',
        height: '219px',
      },
    },
  },

  input: {
    normal: {},
    disabled: {
      color: '#EB9F1A',
      border: '',
    },
    focus: {},
    actived: {},
  },
};
