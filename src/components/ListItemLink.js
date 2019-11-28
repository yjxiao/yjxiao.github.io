function ListItemLink(props) {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((linkProps, ref) => (
          // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
          // See https://github.com/ReactTraining/react-router/issues/6056
          <Link to={to} {...linkProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }