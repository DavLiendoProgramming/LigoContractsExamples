{
  admin = {
    admin = ("tz1STSXqr1JDhYPsYQvP8nLE27bUts1qe9dL" : address);
    pending_admin = (None : address option);
    paused = true;
  };
  assets = {
      ledger = (Big_map.empty : (token_id, address) big_map);
      operators = (Big_map.empty : operator_storage);
      metadata = {
        token_defs = (Set.empty : token_def set);
        next_token_id = 0n;
        metadata = (Big_map.empty : (token_def, token_metadata) big_map);
      };
  };
  metadata = Big_map.literal [
    ("", Bytes.pack "tezos-storage:content" );
    (* ("", 0x74657a6f732d73746f726167653a636f6e74656e74); *)
    ("content", 0x00) (* bytes encoded UTF-8 JSON *)
  ];
}
