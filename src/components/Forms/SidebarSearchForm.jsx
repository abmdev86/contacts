import { Label, TextInput, Button, Spinner } from "flowbite-react";

const SidebarSearchForm = () => {
  return (
    <>
      <form id="search-form" role="search" className="flex flex-col gap-4">
        <Label htmlFor="q" value="Search" />

        <TextInput
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
          className="w-full pl-8 relative"
        />
        <Spinner
          color="pink"
          aria-label="searching spinner progress"
          hidden={true}
          className="text-center"
        />
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <form method="post">
        <Button type="submit">New</Button>
      </form>
    </>
  );
};

export default SidebarSearchForm;
