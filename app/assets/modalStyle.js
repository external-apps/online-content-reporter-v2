export const modalMobileOverlay = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: '#ffffff',
    fontFamily: 'childline',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0.1rem',
    outline: 'none',
    padding: '1rem',
    minWidth: '260px',
    height: '90%',
    maxHeight: '480px',
    maxWidth: '450px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '100'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}

export const modalDesktopOverlay = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: '#fff',
    fontFamily: 'childline',
    WebkitOverflowScrolling: 'touch',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.1rem',
    outline: 'none',
    padding: '1rem',
    minWidth: '280px',
    height: '90%',
    maxHeight: '480px',
    maxWidth: '600px',
    overflow: 'auto',
    zIndex: '100'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}
