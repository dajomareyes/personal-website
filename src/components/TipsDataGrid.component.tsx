import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, InputAdornment, Stack, TextField } from "@mui/material";
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { useState } from "react";

const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector
          slotProps={{ tooltip: { title: 'Change density' } }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Export data' },
            button: { variant: 'outlined' },
          }}
        />
      </GridToolbarContainer>
    );
  };
  
  const SimpleGrid = (props: any) => {
    const columns = [
      { field: "name", headerName: "Name", width: 200, editable: true },
      { field: "value", headerName: "Value", width: 100, editable: true },
      { field: "tag", headerName: "Tag", width: 200, editable: true },
    ];
  
    return (
      <Stack>
        <DataGrid
          rows={props.tags}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          autoHeight
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Stack>
    );
  };
  
  type Tags = {
    id: number;
    tag: string;
    name: string;
    value: number;
  };
  
  type SimpleDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    tags: Tags[];
    setTags: (tags: Tags[]) => void;
  };
  
  export const SimpleDialog = (props: SimpleDialogProps) => {
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [tag, setTag] = useState("");
  
    const handleClose = () => {
      props.setOpen(false);
    };
  
    const handleSave = () => {
      if (!name && !value && !tag) {
        return;
      }
  
      const tagIndex = props.tags.findIndex((t) => t.tag === tag);
  
      if (tagIndex === -1) {
        props.setTags([
          ...props.tags,
          {
            id: props.tags.length + 1,
            tag,
            name,
            value,
          },
        ]);
      }
  
      setName("");
      setValue(0);
      setTag("");
      props.setOpen(false);
    };
  
    return (
      <Dialog open={props.open}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Stack spacing={2} margin={4}>
              <TextField
                fullWidth
                label="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Value"
                value={value}
                onChange={(e) => setValue(+e.target.value)}
                InputProps={{
                  type: "number",
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <Stack spacing={2} direction="row" justifyContent="right">
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
              </Stack>
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };